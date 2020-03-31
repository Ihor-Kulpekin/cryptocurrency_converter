const CCC = {};

CCC.TYPE = {
  'CURRENTAGG': '5'
};

CCC.CURRENT = CCC.CURRENT || {};

CCC.CURRENT.FIELDS = {
  'TYPE': 0x0       // hex for binary 0, it is a special case of fields that are always there
  , 'MARKET': 0x0       // hex for binary 0, it is a special case of fields that are always there
  , 'FROMSYMBOL': 0x0       // hex for binary 0, it is a special case of fields that are always there
  , 'TOSYMBOL': 0x0       // hex for binary 0, it is a special case of fields that are always there
  , 'FLAGS': 0x0       // hex for binary 0, it is a special case of fields that are always there
  , 'PRICE': 0x1       // hex for binary 1
  , 'BID': 0x2       // hex for binary 10
  , 'OFFER': 0x4       // hex for binary 100
  , 'LASTUPDATE': 0x8       // hex for binary 1000
  , 'AVG': 0x10      // hex for binary 10000
  , 'LASTVOLUME': 0x20      // hex for binary 100000
  , 'LASTVOLUMETO': 0x40      // hex for binary 1000000
  , 'LASTTRADEID': 0x80      // hex for binary 10000000
  , 'VOLUMEHOUR': 0x100     // hex for binary 100000000
  , 'VOLUMEHOURTO': 0x200     // hex for binary 1000000000
  , 'VOLUME24HOUR': 0x400     // hex for binary 10000000000
  , 'VOLUME24HOURTO': 0x800     // hex for binary 100000000000
  , 'OPENHOUR': 0x1000    // hex for binary 1000000000000
  , 'HIGHHOUR': 0x2000    // hex for binary 10000000000000
  , 'LOWHOUR': 0x4000    // hex for binary 100000000000000
  , 'OPEN24HOUR': 0x8000    // hex for binary 1000000000000000
  , 'HIGH24HOUR': 0x10000   // hex for binary 10000000000000000
  , 'LOW24HOUR': 0x20000   // hex for binary 100000000000000000
  , 'LASTMARKET': 0x40000   // hex for binary 1000000000000000000, this is a special case and will only appear on CCCAGG messages
};

CCC.CURRENT.DISPLAY = CCC.CURRENT.DISPLAY || {};
CCC.CURRENT.DISPLAY.FIELDS = {
  'TYPE': {'Show': false}
  , 'MARKET': {'Show': true, 'Filter': 'Market'}
  , 'FROMSYMBOL': {'Show': false}
  , 'TOSYMBOL': {'Show': false}
  , 'FLAGS': {'Show': false}
  , 'PRICE': {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
  , 'BID': {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
  , 'OFFER': {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
  , 'LASTUPDATE': {'Show': true, 'Filter': 'Date', 'Format': 'yyyy MMMM dd HH:mm:ss'}
  , 'AVG': {'Show': true, ' Filter': 'Number', 'Symbol': 'TOSYMBOL'}
  , 'LASTVOLUME': {'Show': true, 'Filter': 'Number', 'Symbol': 'FROMSYMBOL'}
  , 'LASTVOLUMETO': {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
  , 'LASTTRADEID': {'Show': true, 'Filter': 'String'}
  , 'VOLUMEHOUR': {'Show': true, 'Filter': 'Number', 'Symbol': 'FROMSYMBOL'}
  , 'VOLUMEHOURTO': {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
  , 'VOLUME24HOUR': {'Show': true, 'Filter': 'Number', 'Symbol': 'FROMSYMBOL'}
  , 'VOLUME24HOURTO': {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
  , 'OPENHOUR': {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
  , 'HIGHHOUR': {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
  , 'LOWHOUR': {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
  , 'OPEN24HOUR': {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
  , 'HIGH24HOUR': {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
  , 'LOW24HOUR': {'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL'}
  , 'LASTMARKET': {'Show': true, 'Filter': 'String'}
};

CCC.CURRENT_PRICE = CCC.CURRENT_PRICE || {};

CCC.CURRENT_PRICE.PRICE = {
  'CURRENT_PRICE': {}
};

CCC.CURRENT.dataUnpack = (data) => {
  const currentPrice = CCC.CURRENT_PRICE.PRICE.CURRENT_PRICE;
  const from = data.FROMSYMBOL;
  const to = data.TOSYMBOL;
  const pair = from + to;

  // if (!currentPrice.hasOwnProperty(pair)) {
  //   currentPrice[pair] = {};
  // }

  Object.keys(data).map((key)=>{
    if (!currentPrice.hasOwnProperty(pair)) {
      currentPrice[pair] = {};
    }
    currentPrice[pair][key] = data[key];
    return currentPrice[pair][key];
  });

  currentPrice[pair].CHANGE24HOURPCT = (
    (currentPrice[pair].PRICE - currentPrice[pair].OPEN24HOUR) /
    currentPrice[pair].OPEN24HOUR * 100).toFixed(2) + '%';

  return currentPrice[pair];
};

CCC.CURRENT.unpack = function (payload) {
  const valuesArray = Object.values(payload);
  const valuesArrayLenght = valuesArray.length;
  const mask = valuesArray[valuesArrayLenght - 1];
  const maskInt = parseInt(mask, 16);
  const unpackedCurrent = {};
  let currentField = 0;

  Object.keys(this.FIELDS).map((property) => {
    if (this.FIELDS[property] === 0) {
      unpackedCurrent[property] = valuesArray[currentField];
      currentField++;
    } else if (maskInt && this.FIELDS[property]) {
      if (property === 'LASTMARKET') {
        unpackedCurrent[property] = valuesArray[currentField];
      } else {
        unpackedCurrent[property] = parseFloat(valuesArray[currentField]);
      }
      currentField++;
    }
    return unpackedCurrent;
  });
  return unpackedCurrent;
};

export default CCC;