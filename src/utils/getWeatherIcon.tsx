import Cloud from '../assets/svg/cloud'
import Rain from '../assets/svg/rain'
import Snow from '../assets/svg/snow'
import Sun from '../assets/svg/cloud'
import Plus from '../assets/svg/plus'

const sunCodes = [113, 116]
const cloudCodes = [116, 119, 122, 143, 182, 200, 248, 260]
const rainCodes = [
  176,
  263,
  266,
  281,
  293,
  296,
  299,
  302,
  305,
  308,
  311,
  314,
  353,
  356,
  359,
  386,
  389,
]
const snowCodes = [
  179,
  227,
  230,
  317,
  320,
  323,
  326,
  329,
  332,
  335,
  338,
  350,
  362,
  365,
  368,
  371,
  374,
  377,
  392,
  395,
]

export const allCodes = [
  ...sunCodes,
  ...cloudCodes,
  ...rainCodes,
  ...snowCodes,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
]

export const getWeatherIcon = (code: number) => {
  if (sunCodes.includes(code)) return <Sun />
  if (cloudCodes.includes(code)) return <Cloud />
  if (rainCodes.includes(code)) return <Rain />
  if (snowCodes.includes(code)) return <Snow />
  return <Plus rotated color="white" />
}
