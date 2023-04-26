import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, CSSObject, Divider, IconButton, styled, Theme, Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import { ReactElement, Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { UpMenuItemGroup } from "../../models/up-menu-item-group";
import LayoutList from "./layout-component/layout-list";

export interface UpLayoutProps {
    appTitle: string,
    logo: ReactElement;
    menuExpandedIcon?: ReactElement;
    menuCollapsedIcon?: ReactElement;
    toolbarEndComponent?: ReactElement;
    menuGroups: UpMenuItemGroup[];
    drawerWidth?: number;
    onDrawerToggle?: Function;
}

const UpLayout = (props: UpLayoutProps) => {
    let { drawerWidth } = props;
    drawerWidth ??= 240;

    const { appTitle, logo, menuCollapsedIcon, menuExpandedIcon, toolbarEndComponent, menuGroups, onDrawerToggle } = props;

    const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            // duration: theme.transitions.duration.enteringScreen,
            duration: 20
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: 20,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        backgroundColor: 'goldenrod'
    }));

    interface AppBarProps extends MuiAppBarProps {
        open?: boolean;
    }

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: 20,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: 2,
            }),
        }),
    }));

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );

    const MiniDrawer = () => {
        const [menuOpened, menuOpen] = useState<boolean>(false);

        const handleDrawerOpen = () => {
            menuOpen(true);

            if (onDrawerToggle)
                onDrawerToggle(true);
        };

        const handleDrawerClose = () => {
            menuOpen(false);

            if (onDrawerToggle)
                onDrawerToggle(false);
        };

        return (
            <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed" open={menuOpened} enableColorOnDark>
                    <Toolbar>
                        <IconButton
                            color="default"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                width: 42,
                                ...(menuOpened && { display: 'none' }),
                            }}
                        >
                            {menuCollapsedIcon ?? <FontAwesomeIcon icon="fad fa-glass-whiskey-rocks" />}
                        </IconButton>
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                            {appTitle}
                        </Typography>

                        {toolbarEndComponent}
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={menuOpened}>
                    <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        {logo}
                        <IconButton onClick={handleDrawerClose} sx={{ width: 42 }}>
                            {menuExpandedIcon ?? <FontAwesomeIcon icon={'chevron-left'} />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <LayoutList menuOpened={menuOpened} groups={menuGroups} />
                </Drawer>
                <Container component="main" maxWidth="xl" sx={{ mt: 5, pt: 5, width: '100%' }}>
                    <Suspense fallback={<p>Carregando...</p>}>
                        <Outlet />
                    </Suspense>
                </Container>
            </Box>
        );
    }

    return MiniDrawer();
}

export default UpLayout;