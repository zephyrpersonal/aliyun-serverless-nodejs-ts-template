import merge from 'webpack-merge'
import common from './webpack.base'

export default merge(common, {
  mode: 'production'
})
