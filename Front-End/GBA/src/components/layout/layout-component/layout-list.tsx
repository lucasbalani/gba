import { List, Divider, ListSubheader } from "@mui/material";
import { Box } from "@mui/system";
import { UpMenuItemGroup } from "../../../models/up-menu-item-group";
import { UpMenuItem } from "../../../models/up-menu-item";
import LayoutListItem from "./layout-list-item";

interface LayoutListProps {
    groups: UpMenuItemGroup[];
    menuOpened: boolean;
}

const LayoutList = (props: LayoutListProps) => {
    const { groups, menuOpened } = props;

    const showDivider = (group: UpMenuItemGroup): boolean => {
        let index: number = groups.indexOf(group);

        return index < groups.length - 1
    };

    return (
        <List>
            {groups.map((group: UpMenuItemGroup) => (
                <Box key={group.title}>
                    {menuOpened && <ListSubheader >{group.title}</ListSubheader>}
                    {group.items.map((item: UpMenuItem) => (
                        <LayoutListItem key={item.text} item={item} menuOpened={menuOpened} />
                    ))}

                    {menuOpened && showDivider(group) && <Divider sx={{ my: 1, bgcolor: "secondary.light" }} />}
                </Box>
            ))}
        </List>
    );
}

export default LayoutList;