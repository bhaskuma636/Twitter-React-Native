import * as React from 'react'
import Svg, {SvgProps, Path} from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="prefix__r-13gxpu9 prefix__r-4qtqp9 prefix__r-yyyyoo prefix__r-16y2uox prefix__r-1q142lx prefix__r-8kz0gk prefix__r-dnmrzs prefix__r-bnwqim prefix__r-1plcrui prefix__r-lrvibr prefix__r-1srniue"
      {...props}>
      <Path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 003.96 9.824a4.647 4.647 0 01-2.11-.583v.06a4.66 4.66 0 003.737 4.568 4.692 4.692 0 01-2.104.08 4.661 4.661 0 004.352 3.234 9.348 9.348 0 01-5.786 1.995 9.5 9.5 0 01-1.112-.065 13.175 13.175 0 007.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 002.323-2.41z" />
    </Svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
