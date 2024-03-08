import backgroundAvatar from './background-avatar'
import backgroundNameCenter from './background-name-center'
import { iconBag } from './inventory'

const handleLoadGUI = () => {
  return {
    /**
     * sprite_file_name: spriteFunction
     */
    background_name_center: backgroundNameCenter,
    background_avatar: backgroundAvatar,
    icon_bag: iconBag,
  }
}

export default handleLoadGUI
