import logo from '../assets/react.svg';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpLayout from "../components/layout";
import { UpMenuItem } from "../models/up-menu-item";
import { UpMenuItemGroup } from "../models/up-menu-item-group";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const componentsGroup = new UpMenuItemGroup('Relatórios', [
    new UpMenuItem(['fas', 'file-signature'], '/report-salles', 'Vendas', 'Vendas'),
    new UpMenuItem(['fas', 'dollar-sign'], '/currencyIndexes', 'Estoque', 'Estoque'),
    new UpMenuItem(['fas', 'file-invoice-dollar'], '/invoices', 'Vendas Caixa', 'Vendas por Caixa'),
    new UpMenuItem(['fas', 'file-invoice-dollar'], '/invoices', 'Top Produtos Vendidos', 'Top Produtos Vendidos')

]);


const DefaulLayout = () => {
    return (
        <UpLayout appTitle="Management Business Analyst"
            logo={<img src={logo} style={{ height: '30px' }} alt="logo" />}
            menuGroups={[componentsGroup]}
            menuCollapsedIcon={<FontAwesomeIcon icon={'ellipsis-vertical'} />}
            menuExpandedIcon={<FontAwesomeIcon icon={'times'} />}
            drawerWidth={230}
        />

    )
}

export default DefaulLayout;