// API Data
var api_key = 'PPP32UEAJTOA2650';
var api_data = {};
var options = {};
var inputs = {};

options['interval'] = {};
options['series_type'] = {};

options['fastkperiod'] = {};
options['slowkperiod'] = {};
options['slowdperiod'] = {};
options['fastmatypes'] = {};
options['slowmatypes'] = {};
options['signalmatypes'] = {};
options['slowkmatypes'] = {};
options['slowdmatypes'] = {};
options['matype'] = {};
options['fastdmatypes'] = {};

var base_url = 'https://www.alphavantage.co/query';

api_data['functions'] = [
    { name: 'Intraday', value: 'TIME_SERIES_INTRADAY' },
    { name: 'Daily', value: 'TIME_SERIES_DAILY' },
    { name: 'Daily (Adj. Close)', value: 'TIME_SERIES_DAILY_ADJUSTED' },
    { name: 'Weekly', value: 'TIME_SERIES_WEEKLY' },
    { name: 'Monthly', value: 'TIME_SERIES_MONTHLY' },
    { name: 'Simple Moving Average', value: 'SMA' },
    { name: 'Exponential Moving Average', value: 'EMA' },
    { name: 'Weighted Moving Average', value: 'WMA' },
    { name: 'Double Exponential Moving Avg', value: 'DEMA' },
    { name: 'Triple Exponential Moving Avg', value: 'TEMA' },
    { name: 'Triangular Moving Average', value: 'TRIMA' },
    { name: 'Kaufman Adaptive Moving Avg', value: 'KAMA' },
    { name: 'MESA Adaptive Moving Avg', value: 'MAMA' },
    { name: 'T3 Triple Exponential Moving Avg', value: 'T3' },
    { name: 'Moving Avg Convergence / Divergence', value: 'MACD' },
    { name: 'Moving Avg Convergence / Divergence EXT', value: 'MACDEXT' },
    { name: 'Stochastic Oscillator', value: 'STOCH' },
    { name: 'Stochastic Fast', value: 'STOCHF' },
    { name: 'Relative Strength Index', value: 'RSI' },
    { name: 'Stochastic Relative Strength Index', value: 'STOCHRSI' },
    { name: 'Williams %R', value: 'WILLR' },
    { name: 'Average Directional Movement', value: 'ADX' },
    { name: 'Average Directional Movement Index Rating', value: 'ADXR' },
    { name: 'Absolute Price Oscillator', value: 'APO' },
    { name: 'Percentage Price Oscillator', value: 'PPO' },
    { name: 'Momentum', value: 'MOM' },
    { name: 'Balance of Power', value: 'BOP' },
    { name: 'Commodity Channel Index', value: 'CCI' },
    { name: 'Chande Momentum Oscillator', value: 'CMO' },
    { name: 'Rate of Change', value: 'ROC' },
    { name: 'Rate of Change Ratio', value: 'ROCR' },
    { name: 'Aroon', value: 'AROON' },
    { name: 'Aroon Oscillator', value: 'AROONOSC' },
    { name: 'Money Flow Index', value: 'MFI' },
    { name: 'Triple Smooth Exponential Moving Average', value: 'TRIX' },
    { name: 'Ultimate Oscillator', value: 'ULTOSC' },
    { name: 'Directional Movement Index', value: 'DX' },
    { name: 'Minus Directional Indicator', value: 'MINUS_DI' },
    { name: 'Plus Directional Indicator', value: 'PLUS_DI' },
    { name: 'Minus Directional Movement', value: 'MINUS_DM' },
    { name: 'Plus Directional Movement', value: 'PLUS_DM' },
    { name: 'Bollinger Bands', value: 'BBANDS' },
    { name: 'Midpoint', value: 'MIDPOINT' },
    { name: 'Midpoint Price', value: 'MIDPRICE' },
    { name: 'Parabolic SAR', value: 'SAR' },
    { name: 'True Range', value: 'TRANGE' },
    { name: 'Average True Range', value: 'ATR' },
    { name: 'Normalized Average True Range', value: 'NATR' },
    { name: 'Chaikin A/D line (AD)', value: 'AD' },
    { name: 'Chaikin A/D line (AD) Oscillator', value: 'ADOSC' },
    { name: 'Balance Volume', value: 'OBV' },
    { name: 'Hilbert Transform, Instantaneous Trendline', value: 'HT_TRENDLINE' },
    { name: 'Hilbert Transform, Sine Wave', value: 'HT_SINE' },
    { name: 'Hilbert Transform, Trend Vs. Cycle Mode', value: 'HT_TRENDMODE' },
    { name: 'Hilbert Transform, Dominant Cycle Period', value: 'HT_DCPERIOD' },
    { name: 'Hilbert Transform, Dominant Cycle Phase', value: 'HT_DCPHASE' },
    { name: 'Hilbert Transform, Phasor Components', value: 'HT_PHASOR' },
    { name: 'Sector', value: 'SECTOR' }
];

options['interval']['TIME_SERIES_INTRADAY'] = [
    { name: '-- Interval --', value: '0min' },
    { name: '1 Minute', value: '1min' },
    { name: '5 Minutes', value: '5min' },
    { name: '15 Minutes', value: '15min' },
    { name: '30 Minutes', value: '30min' },
    { name: '1 Hour', value: '60min' }
];

options['interval']['SMA'] = options['interval']['EMA'] = options['interval']['WMA'] = options['interval']['DEMA'] = options['interval']['TEMA'] =
options['interval']['TRIMA'] = options['interval']['KAMA'] = options['interval']['MAMA'] = options['interval']['T3'] =
options['interval']['MACD'] = options['interval']['MACDEXT'] = options['interval']['STOCH'] = options['interval']['STOCHF'] =
options['interval']['RSI'] = options['interval']['STOCHRSI'] = options['interval']['WILLR'] = options['interval']['ADX'] =
options['interval']['ADXR'] = options['interval']['APO'] = options['interval']['PPO'] = options['interval']['MOM'] =
options['interval']['BOP'] = options['interval']['CCI'] = options['interval']['CMO'] = options['interval']['ROC'] =
options['interval']['ROCR'] = options['interval']['AROON'] = options['interval']['AROONOSC'] = options['interval']['MFI'] =
options['interval']['TRIX'] = options['interval']['ULTOSC'] = options['interval']['DX'] = options['interval']['MINUS_DI'] =
options['interval']['PLUS_DI'] = options['interval']['MINUS_DM'] = options['interval']['PLUS_DM'] = options['interval']['BBANDS'] =
options['interval']['MIDPOINT'] = options['interval']['MIDPRICE'] = options['interval']['SAR'] = options['interval']['TRANGE'] =
options['interval']['ATR'] = options['interval']['NATR'] = options['interval']['AD'] = options['interval']['ADOSC'] =
options['interval']['OBV'] = options['interval']['HT_TRENDLINE'] = options['interval']['HT_SINE'] = options['interval']['HT_TRENDMODE'] =
options['interval']['HT_DCPERIOD'] = options['interval']['HT_DCPHASE'] = options['interval']['HT_PHASOR'] = [
    { name: '-- Interval --', value: '0min' },
    { name: '1 Minute', value: '1min' },
    { name: '5 Minutes', value: '5min' },
    { name: '15 Minutes', value: '15min' },
    { name: '30 Minutes', value: '30min' },
    { name: 'Daily', value: 'daily' },
    { name: 'Weekly', value: 'weekly' },
    { name: 'Monthly', value: 'monthly' }
];

options['series_type']['SMA'] = options['series_type']['EMA'] = options['series_type']['WMA'] = options['series_type']['DEMA'] = options['series_type']['TEMA'] =
options['series_type']['TRIMA'] = options['series_type']['KAMA'] = options['series_type']['MAMA'] = options['series_type']['T3'] =
options['series_type']['MACD'] = options['series_type']['MACDEXT'] = options['series_type']['RSI'] = options['series_type']['STOCHRSI'] =
options['series_type']['APO'] = options['series_type']['PPO'] = options['series_type']['MOM'] = options['series_type']['CMO'] =
options['series_type']['ROC'] = options['series_type']['ROCR'] = options['series_type']['TRIX'] = options['series_type']['BBANDS'] =
options['series_type']['MIDPOINT'] = options['series_type']['HT_TRENDLINE'] = options['series_type']['HT_SINE'] = options['series_type']['HT_TRENDMODE'] =
options['series_type']['HT_DCPERIOD'] = options['series_type']['HT_DCPHASE'] = options['series_type']['HT_PHASOR'] = [
    { name: '-- Series --', value: '0min' },
    { name: 'Close', value: 'close' },
    { name: 'Open', value: 'open' },
    { name: 'High', value: 'high' },
    { name: 'Low', value: 'low' }
];

options['fastmatypes']['MACDEXT'] = options['slowmatypes']['MACDEXT'] = options['signalmatypes']['MACDEXT'] =
options['slowkmatypes']['STOCH'] = options['slowdmatypes']['STOCH'] = options['fastdmatypes']['STOCHF'] =
options['fastdmatypes']['STOCHRSI'] = options['matype']['APO'] = options['matype']['PPO'] = options['matype']['BBANDS'] = [
    { name: 'SMA', value: 0 },
    { name: 'EMA', value: 1 },
    { name: 'WMA', value: 2 },
    { name: 'DEMA', value: 3 },
    { name: 'TEMA', value: 4 },
    { name: 'TRIMA', value: 5 },
    { name: 'KAMA', value: 6 },
    { name: 'MESA', value: 7 },
    { name: 'MAMA', value: 8 }
];

inputs['time_period'] = ['SMA', 'EMA', 'WMA', 'DEMA', 'TEMA', 'TRIMA', 'KAMA', 'MAMA', 'T3', 'RSI', 'STOCHRSI',
    'WILLR', 'ADX', 'ADXR', 'MOM', 'CCI', 'CMO', 'ROC', 'ROCR', 'AROON', 'AROONOSC', 'MFI', 'TRIX', 'DX', 'MINUS_DI', 'PLUS_DI',
    'MINUS_DM', 'PLUS_DM', 'BBANDS', 'MIDPOINT', 'MIDPRICE', 'ATR', 'NATR' ];
inputs['slowperiod'] = inputs['fastperiod'] = [ 'MACD', 'MACDEXT', 'APO', 'PPO', 'ADOSC' ];
inputs['signalperiod'] = [ 'MACD', 'MACDEXT' ];
inputs['fastkperiod'] = ['STOCH', 'STOCHF', 'STOCHRSI'];
inputs['fastdperiod'] = ['STOCHF', 'STOCHRSI'];
inputs['slowkperiod'] = inputs['slowdperiod'] = ['STOCH'];
inputs['timeperiod1'] = inputs['timeperiod2'] = inputs['timeperiod3'] = ['ULTOSC'];
inputs['nbdevup'] = inputs['nbdevdn'] = ['BBANDS'];
inputs['acceleration'] = inputs['maximum'] = ['SAR'];
// End API Data