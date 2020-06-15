import catalogConsts from './catalog'
import detailsConsts from './details'
import cartConstants from './cart'
import drawerConstans from './drawer'
import searchConstants from './search'

const constsRoot = {
    ...catalogConsts,
    ...detailsConsts,
    ...cartConstants,
    ...drawerConstans,
    ...searchConstants
}

export default constsRoot