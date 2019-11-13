

const measurements = [
  { type: 'length',
    name: 'IN-CM',
    conv: '1in= 2.54cm',
    title: 'Inches to Centimeters'
  },
  { type: 'length',
    name: 'CM-IN',
    conv: '1cm= 0.39in',
    title: 'Centimeters to Inches'
  },
  { type: 'length',
    name: 'IN-MM',
    conv: '1in= 25.4mm',
    title: 'Inches to Millimeters'
  },
  { type: 'length',
    name: 'MM-IN',
    conv: '1mm= 0.04in',
    title: 'Millimeters to Inches'
  },
  { type: 'length',
    name: 'FT-MT',
    conv: '1ft= 0.30mt',
    title: 'Feet to Meters'
  },
  { type: 'length',
    name: 'MT-FT',
    conv: '1mt= 3.28ft',
    title: 'Meters to Feet'
  },
  { type: 'length',
    name: 'MI-KM',
    conv: '1mi= 1.61km',
    title: 'Miles to Kilometers'
  },
  { type: 'length',
    name: 'KM-MI',
    conv: '1km= 0.62mi',
    title: 'Kilometers to Miles'
  },
  { type: 'weight',
    name: 'OU-GM',
    conv: '1oz= 28.35gm',
    title: 'Ounces to Grams'
  },
  { type: 'weight',
    name: 'GM-OU',
    conv: '1gm= 0.04oz',
    title: 'Grams to Ounces'
  },
  { type: 'weight',
    name: 'LB-GM',
    conv: '1lb= 453.59gm',
    title: 'Pounds to Grams'
  },
  { type: 'weight',
    name: 'GM-LB',
    conv: '1gm= 0.002lb',
    title: 'Grams to Pounds'
  },
  { type: 'weight',
    name: 'LB-KG',
    conv: '1lb= 0.45kg',
    title: 'Pounds to Kilograms'
  },
  { type: 'weight',
    name: 'KG-LB',
    conv: '1kg= 2.20lb',
    title: 'Kilograms to Pounds'
  },
  { type: 'temperature',
    name: 'CL-FH',
    conv: '1°c= 33.8°f',
    title: 'Celsius to Fahrenheit'
  },
  { type: 'temperature',
    name: 'FH-CL',
    conv: '1°f= -17.2°c',
    title: 'Fahrenheit to Celsius'
  },
  { type: 'volume',
    name: 'GL-LT',
    conv: '1gal= 3.79l',
    title: 'Gallons to Liters'
  },
  { type: 'volume',
    name: 'LT-GL',
    conv: '1l= 0.26gal',
    title: 'Liters to Gallons'
  },
  { type: 'volume',
    name: 'PT-LT',
    conv: '1pt= 0.47l',
    title: 'Pints to Liters'
  },
  { type: 'volume',
    name: 'LT-PT',
    conv: '1l= 2.11pt',
    title: 'Liters to Pints'
  },
  { type: 'speed',
    name: 'KH-MH',
    conv: '1kph= 0.62mph',
    title: 'KPH to MPH'
  },
  { type: 'speed',
    name: 'MH-KH',
    conv: '1mph= 1.61kph',
    title: 'MPH to KPH'
  },
  { type: 'torque',
    name: 'NM-FT',
    conv: '1Nm= 0.74ftlb',
    title: 'Newton Meter to FtLb'
  },
  { type: 'torque',
    name: 'FT-NM',
    conv: '1ftlb= 1.36Nm',
    title: 'Foot Pound to Nm'
  }
];

// Vue
const conversionApp = new Vue ({
  el: '#conversionApp',
  data: {
    title: "Measurement Conversions",
    measurements: measurements,
    type: ''
  },
  methods: {
    // displays only selections of that measurement type
    selection: function(){
    this.type = event.target.value;
    }
  },
  computed: {
    // displays product types in selection menu only once
    selectType: function(){
      const types = [];
      this.measurements.forEach((item)=>{
        if(!types.includes(item.type)){
          types.push(item.type);
        }
      });
      return types;
    }
  }
}); //end Vue

// -- Conversion  Formula functions ---
// inch to cm
function inCm(x){
  const inch = x;
  const cm = 2.54 * inch;
  return cm.toFixed(2);
}

// cm to inch
function cmIn(x){
  const cm = x;
  const inch = cm/2.54;
  return inch.toFixed(2);
}

// inch to mm
function inMm(x){
  const inch = x;
  const mm = 25.4 * inch;
  return mm.toFixed(2);
}

// mm to inch
function mmIn(x){
  const mm = x;
  const inch = mm/25.4;
  return inch.toFixed(2);
}

// ft to mt
function ftMt(x){
  const f = x;
  const m = f * 0.3048;
  return m.toFixed(2);
}

// mt to ft
function mtFt(x){
  const mt = x;
  const ft = 3.28084 * mt;
  return ft.toFixed(2);
}

// mi to km
function miKm(x){
  const m = x;
  const k = 1.60934 * m;
  return k.toFixed(2);
}

//km to mi
function kmMi(x){
  const k = x;
  const m = 0.621371 * k;
  return m.toFixed(2);
}

// ou to gm
function ouGm(x){
  const ou = x;
  const gm = 28.3495 * ou;
  return gm.toFixed(2);
}

// gm to ou
function gmOu(x){
  const gm = x;
  const ou = gm/28.3495;
  return ou.toFixed(2);
}

// lb to gm
function lbGm(x){
  const lb = x;
  const gm = 453.592 * lb;
  return gm.toFixed(2);
}

// gm to lb
function gmLb(x){
  const gm = x;
  const lb = gm/453.592;
  return lb.toFixed(3);
}

// lb to kg
function lbKg(x){
  const lb = x;
  const kg = lb/2.20462;
  return kg.toFixed(2);
}

// kg to lb
function kgLb(x){
  const kg = x;
  const lb = 2.20462 * kg;
  return lb.toFixed(2);
}

// cl to fh
function clFh(x){
  const c = x;
  const f = (c * (9/5)) + 32;
  return f.toFixed(1);
}

// fh to cl
function fhCl(x){
  const f = x;
  const c = (f - 32) * (5/9);
  return c.toFixed(1);
}

// gl to lt
function glLt(x){
  const g = x;
  const l = g * 3.78541;
  return l.toFixed(2);
}

// lt to gl
function ltGl(x){
  const l = x;
  const g = l/3.78541;
  return g.toFixed(2);
}

//pt to lt
function ptLt(x){
  const p = x;
  const l = p/2.11338;
  return l.toFixed(2);
}

// lt to pt
function ltPt(x){
  const l = x;
  const p = l * 2.11338;
  return p.toFixed(2);
}

// KPH to MPH
function khMh(x){
  const k = x;
  const m = k * 0.621371;
  return m.toFixed(2);
}

// MPH to KPH
function mhKh(x){
  const m = x;
  const k = m * 1.60934;
  return k.toFixed(2);
}

// Nm to FtLb
function nmFt(x){
  const n = x;
  const f = n * 0.73756;
  return f.toFixed(2);
}

// FtLb to Nm
function ftNm(x){
  const f = x;
  const n = f/0.73756;
  return n.toFixed(2);
}
// --- end conversions formulas ---

// Input on change function for conversions
$('li').change(function(){
   const input = event.target;
   const li = input.parentNode;

// Inch to Centi
  if($(this).attr('data-name') === "IN-CM"){
    const val = input.value;
    const span = li.querySelector('span');
    span.textContent = val + 'in= ' + inCm(val) + 'cm';
    li.insertBefore(span, input);
    }
  // Centi to Inch
  else if($(this).attr('data-name') === "CM-IN"){
    const val = input.value;
    const span = li.querySelector('span');
    span.textContent = val + 'cm= ' + cmIn(val) + 'in';
    li.insertBefore(span, input);
    }
  // Inch to Millimeter
  else if($(this).attr('data-name') === "IN-MM"){
    const val = input.value;
    const span = li.querySelector('span');
    span.textContent = val + 'in= ' + inMm(val) + 'mm';
    li.insertBefore(span, input);
      }
  // Milli to Inch
  else if($(this).attr('data-name') === "MM-IN"){
    const val = input.value;
    const span = li.querySelector('span');
    span.textContent = val + 'mm= ' + mmIn(val) + 'in';
    li.insertBefore(span, input);
    }
  // Feet to Meters
  else if($(this).attr('data-name') === "FT-MT"){
    const val = input.value;
    const span = li.querySelector('span');
    span.textContent = val + 'ft= ' + ftMt(val) + 'mt';
    li.insertBefore(span, input);
    }
  // Meter to Feet
    else if($(this).attr('data-name') === "MT-FT"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'mt= ' + mtFt(val) + 'ft';
      li.insertBefore(span, input);;
      }
  // Miles to Kilometers
    else if($(this).attr('data-name') === "MI-KM"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'mi= ' + miKm(val) + 'km';
      li.insertBefore(span, input);;
      }
  // Kilometers to Miles
    else if($(this).attr('data-name') === "KM-MI"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'km= ' + kmMi(val) + 'mi';
      li.insertBefore(span, input);;
      }
  // Ounce to Gram
    else if($(this).attr('data-name') === "OU-GM"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'oz= ' + ouGm(val) + 'gm';
      li.insertBefore(span, input);
      }
  // Gram to Ounces
    else if($(this).attr('data-name') === "GM-OU"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'gm= ' + gmOu(val) + 'oz';
      li.insertBefore(span, input);
      }
  // Pound to Gram
    else if($(this).attr('data-name') === "LB-GM"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'lb= ' + lbGm(val) + 'gm';
      li.insertBefore(span, input);
      }
  // Gram to Pound
    else if($(this).attr('data-name') === "GM-LB"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'gm= ' + gmLb(val) + 'lb';
      li.insertBefore(span, input);
      }
  // Pound to Kilo
    else if($(this).attr('data-name') === "LB-KG"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'lb= ' + lbKg(val) + 'kg';
      li.insertBefore(span, input);
      }
  // Kilo to Pound
    else if($(this).attr('data-name') === "KG-LB"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'kg= ' + kgLb(val) + 'lb';
      li.insertBefore(span, input);
      }
  // Celsius to Fahrenheit
    else if($(this).attr('data-name') === "CL-FH"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + '°c= ' + clFh(val) + '°f';
      li.insertBefore(span, input);
      }
  // Fahrenheit to Celsius
    else if($(this).attr('data-name') === "FH-CL"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + '°f= ' + fhCl(val) + '°c';
      li.insertBefore(span, input);
      }
  // Gallon to Liter
    else if($(this).attr('data-name') === "GL-LT"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'gal= ' + glLt(val) + 'l';
      li.insertBefore(span, input);
      }
  // Liter to Gallon
    else if($(this).attr('data-name') === "LT-GL"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'l= ' + ltGl(val) + 'gal';
      li.insertBefore(span, input);
      }
  // Pint to Liter
    else if($(this).attr('data-name') === "PT-LT"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'pt= ' + ptLt(val) + 'l';
      li.insertBefore(span, input);
      }
  // Liter to Pint
    else if($(this).attr('data-name') === "LT-PT"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'l= ' + ltPt(val) + 'pt';
      li.insertBefore(span, input);
      }
  // KPH to MPH
    else if($(this).attr('data-name') === "KH-MH"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'kph= ' + khMh(val) + 'mph';
      li.insertBefore(span, input);
      }
  // MPH to KPH
    else if($(this).attr('data-name') === "MH-KH"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'mph= ' + mhKh(val) + 'kph';
      li.insertBefore(span, input);
      }
  // Nm to Ft Lb
    else if($(this).attr('data-name') === "NM-FT"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'Nm= ' + nmFt(val) + 'ftlb';
      li.insertBefore(span, input);
      }
  // Nm to Ft Lb
    else if($(this).attr('data-name') === "FT-NM"){
      const val = input.value;
      const span = li.querySelector('span');
      span.textContent = val + 'ftlb= ' + ftNm(val) + 'Nm';
      li.insertBefore(span, input);
      }
}); //  -- end conversions OnChange function --
