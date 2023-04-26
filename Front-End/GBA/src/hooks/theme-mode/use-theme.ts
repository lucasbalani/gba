import { useRecoilValue } from "recoil";
import { themeModeState } from "../../state/theme-state";

const useThemeMode = () => {
    return useRecoilValue(themeModeState);
}

export default useThemeMode;