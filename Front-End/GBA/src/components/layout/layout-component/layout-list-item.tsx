import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UpMenuItem } from "../../../models/up-menu-item";

interface ListItemProps {
    item: UpMenuItem;
    menuOpened: boolean;
}

const LayoutListItem = (props: ListItemProps) => {
    const { item, menuOpened } = props;

    const { icon, route, text, tooltip } = item;

    const navigate = useNavigate();

    const goTo = () => {
        navigate(route);
    }

    return (
        <Tooltip title={menuOpened ? '' : tooltip} placement="right">
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton onClick={() => goTo()}
                    sx={{
                        minHeight: 48,
                        justifyContent: menuOpened ? 'initial' : 'center',
                        px: 2.5,
                    }}>
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: menuOpened ? 2 : 'auto',
                            justifyContent: 'center',
                            width: 24
                        }}>
                        <FontAwesomeIcon icon={icon} />
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: menuOpened ? 1 : 0 }}>
                        <Typography variant="body2">{text}</Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </Tooltip>
    );
};

export default LayoutListItem;