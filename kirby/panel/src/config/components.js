import VueGlobalMethods from "@/config/VueGlobalMethods.js";

/* Dialogs */
import Dialog from "@/components/Dialogs/Dialog.vue";
import ErrorDialog from "@/components/Dialogs/ErrorDialog.vue";
import FiberDialog from "@/components/Dialogs/FiberDialog.vue";
import FilesDialog from "@/components/Dialogs/FilesDialog.vue";
import FormDialog from "@/components/Dialogs/FormDialog.vue";
import LanguageDialog from "@/components/Dialogs/LanguageDialog.vue";
import PagesDialog from "@/components/Dialogs/PagesDialog.vue";
import RemoveDialog from "@/components/Dialogs/RemoveDialog.vue";
import TextDialog from "@/components/Dialogs/TextDialog.vue";
import UsersDialog from "@/components/Dialogs/UsersDialog.vue";

VueGlobalMethods.component("k-dialog", Dialog);
VueGlobalMethods.component("k-error-dialog", ErrorDialog);
VueGlobalMethods.component("k-fiber-dialog", FiberDialog);
VueGlobalMethods.component("k-files-dialog", FilesDialog);
VueGlobalMethods.component("k-form-dialog", FormDialog);
VueGlobalMethods.component("k-language-dialog", LanguageDialog);
VueGlobalMethods.component("k-pages-dialog", PagesDialog);
VueGlobalMethods.component("k-remove-dialog", RemoveDialog);
VueGlobalMethods.component("k-text-dialog", TextDialog);
VueGlobalMethods.component("k-users-dialog", UsersDialog);

/* Drawers */
import Drawer from "@/components/Drawers/Drawer.vue";
import FormDrawer from "@/components/Drawers/FormDrawer.vue";

VueGlobalMethods.component("k-drawer", Drawer);
VueGlobalMethods.component("k-form-drawer", FormDrawer);

/* Form */
import Autocomplete from "@/components/Forms/Autocomplete.vue";
import Calendar from "@/components/Forms/Calendar.vue";
import Counter from "@/components/Forms/Counter.vue";
import Form from "@/components/Forms/Form.vue";
import FormButtons from "@/components/Forms/FormButtons.vue";
import FormIndicator from "@/components/Forms/FormIndicator.vue";
import Field from "@/components/Forms/Field.vue";
import Fieldset from "@/components/Forms/Fieldset.vue";
import Input from "@/components/Forms/Input.vue";
import Login from "@/components/Forms/Login.vue";
import LoginCode from "@/components/Forms/LoginCode.vue";
import Times from "@/components/Forms/Times.vue";
import Upload from "@/components/Forms/Upload.vue";
import Writer from "@/components/Forms/Writer/Writer.vue";

/** Form Helpers */
import LoginAlert from "@/components/Forms/LoginAlert.vue";

/* Form Structure */
import StructureForm from "@/components/Forms/Structure/StructureForm.vue";

/* Form Toolbar */
import Toolbar from "@/components/Forms/Toolbar.vue";
import ToolbarEmailDialog from "@/components/Forms/Toolbar/EmailDialog.vue";
import ToolbarLinkDialog from "@/components/Forms/Toolbar/LinkDialog.vue";

VueGlobalMethods.component("k-calendar", Calendar);
VueGlobalMethods.component("k-counter", Counter);
VueGlobalMethods.component("k-autocomplete", Autocomplete);
VueGlobalMethods.component("k-form", Form);
VueGlobalMethods.component("k-form-buttons", FormButtons);
VueGlobalMethods.component("k-form-indicator", FormIndicator);
VueGlobalMethods.component("k-field", Field);
VueGlobalMethods.component("k-fieldset", Fieldset);
VueGlobalMethods.component("k-input", Input);
VueGlobalMethods.component("k-login", Login);
VueGlobalMethods.component("k-login-code", LoginCode);
VueGlobalMethods.component("k-times", Times);
VueGlobalMethods.component("k-upload", Upload);
VueGlobalMethods.component("k-writer", Writer);

VueGlobalMethods.component("k-login-alert", LoginAlert);

/* Form Inputs */
import "@/components/Forms/Input/index.js";

/* Form Fields */
import "@/components/Forms/Field/index.js";

VueGlobalMethods.component("k-structure-form", StructureForm);

VueGlobalMethods.component("k-toolbar", Toolbar);
VueGlobalMethods.component("k-toolbar-email-dialog", ToolbarEmailDialog);
VueGlobalMethods.component("k-toolbar-link-dialog", ToolbarLinkDialog);

/* Layout */
import AspectRatio from "@/components/Layout/AspectRatio.vue";
import Bar from "@/components/Layout/Bar.vue";
import Box from "@/components/Layout/Box.vue";
import Bubble from "@/components/Layout/Bubble.vue";
import Bubbles from "@/components/Layout/Bubbles.vue";
import Collection from "@/components/Layout/Collection.vue";
import Column from "@/components/Layout/Column.vue";
import Dropzone from "@/components/Layout/Dropzone.vue";
import Empty from "@/components/Layout/Empty.vue";
import FilePreview from "@/components/Layout/FilePreview.vue";
import Grid from "@/components/Layout/Grid.vue";
import Header from "@/components/Layout/Header.vue";
import Inside from "@/components/Layout/Inside.vue";
import Item from "@/components/Layout/Item.vue";
import ItemImage from "@/components/Layout/ItemImage.vue";
import Items from "@/components/Layout/Items.vue";
import Overlay from "@/components/Layout/Overlay.vue";
import Panel from "@/components/Layout/Panel.vue";
import Stats from "@/components/Layout/Stats.vue";
import Table from "@/components/Layout/Table.vue";
import TableCell from "@/components/Layout/TableCell.vue";
import Tabs from "@/components/Layout/Tabs.vue";
import View from "@/components/Layout/View.vue";

VueGlobalMethods.component("k-aspect-ratio", AspectRatio);
VueGlobalMethods.component("k-bar", Bar);
VueGlobalMethods.component("k-box", Box);
VueGlobalMethods.component("k-bubble", Bubble);
VueGlobalMethods.component("k-bubbles", Bubbles);
VueGlobalMethods.component("k-collection", Collection);
VueGlobalMethods.component("k-column", Column);
VueGlobalMethods.component("k-dropzone", Dropzone);
VueGlobalMethods.component("k-empty", Empty);
VueGlobalMethods.component("k-file-preview", FilePreview);
VueGlobalMethods.component("k-grid", Grid);
VueGlobalMethods.component("k-header", Header);
VueGlobalMethods.component("k-inside", Inside);
VueGlobalMethods.component("k-item", Item);
VueGlobalMethods.component("k-item-image", ItemImage);
VueGlobalMethods.component("k-items", Items);
VueGlobalMethods.component("k-overlay", Overlay);
VueGlobalMethods.component("k-panel", Panel);
VueGlobalMethods.component("k-stats", Stats);
VueGlobalMethods.component("k-table", Table);
VueGlobalMethods.component("k-table-cell", TableCell);
VueGlobalMethods.component("k-tabs", Tabs);
VueGlobalMethods.component("k-view", View);

/* Misc */
import Draggable from "@/components/Misc/Draggable.vue";
import ErrorBoundary from "@/components/Misc/ErrorBoundary.vue";
import Fatal from "@/components/Misc/Fatal.vue";
import Headline from "@/components/Misc/Headline.vue";
import Icon from "@/components/Misc/Icon.vue";
import Icons from "@/components/Misc/Icons.vue";
import Image from "@/components/Misc/Image.vue";
import Loader from "@/components/Misc/Loader.vue";
import OfflineWarning from "@/components/Misc/OfflineWarning.vue";
import Progress from "@/components/Misc/Progress.vue";
import Registration from "@/components/Misc/Registration.vue";
import SortHandle from "@/components/Misc/SortHandle.vue";
import StatusIcon from "@/components/Misc/StatusIcon.vue";
import Text from "@/components/Misc/Text.vue";
import UserInfo from "@/components/Misc/UserInfo.vue";

VueGlobalMethods.component("k-draggable", Draggable);
VueGlobalMethods.component("k-error-boundary", ErrorBoundary);
VueGlobalMethods.component("k-fatal", Fatal);
VueGlobalMethods.component("k-headline", Headline);
VueGlobalMethods.component("k-icon", Icon);
VueGlobalMethods.component("k-icons", Icons);
VueGlobalMethods.component("k-image", Image);
VueGlobalMethods.component("k-loader", Loader);
VueGlobalMethods.component("k-offline-warning", OfflineWarning);
VueGlobalMethods.component("k-progress", Progress);
VueGlobalMethods.component("k-registration", Registration);
VueGlobalMethods.component("k-status-icon", StatusIcon);
VueGlobalMethods.component("k-sort-handle", SortHandle);
VueGlobalMethods.component("k-text", Text);
VueGlobalMethods.component("k-user-info", UserInfo);

/* Navigation */
import Breadcrumb from "@/components/Navigation/Breadcrumb.vue";
import Button from "@/components/Navigation/Button.vue";
import ButtonDisabled from "@/components/Navigation/ButtonDisabled.vue";
import ButtonGroup from "@/components/Navigation/ButtonGroup.vue";
import ButtonLink from "@/components/Navigation/ButtonLink.vue";
import ButtonNative from "@/components/Navigation/ButtonNative.vue";
import Dropdown from "@/components/Navigation/Dropdown.vue";
import DropdownContent from "@/components/Navigation/DropdownContent.vue";
import DropdownItem from "@/components/Navigation/DropdownItem.vue";
import Link from "@/components/Navigation/Link.vue";
import Languages from "@/components/Navigation/Languages.vue";
import OptionsDropdown from "@/components/Navigation/OptionsDropdown.vue";
import Pagination from "@/components/Navigation/Pagination.vue";
import PrevNext from "@/components/Navigation/PrevNext.vue";
import Search from "@/components/Navigation/Search.vue";
import Tag from "@/components/Navigation/Tag.vue";
import Topbar from "@/components/Navigation/Topbar.vue";

VueGlobalMethods.component("k-breadcrumb", Breadcrumb);
VueGlobalMethods.component("k-button", Button);
VueGlobalMethods.component("k-button-disabled", ButtonDisabled);
VueGlobalMethods.component("k-button-group", ButtonGroup);
VueGlobalMethods.component("k-button-link", ButtonLink);
VueGlobalMethods.component("k-button-native", ButtonNative);
VueGlobalMethods.component("k-dropdown", Dropdown);
VueGlobalMethods.component("k-dropdown-content", DropdownContent);
VueGlobalMethods.component("k-dropdown-item", DropdownItem);
VueGlobalMethods.component("k-languages-dropdown", Languages);
VueGlobalMethods.component("k-link", Link);
VueGlobalMethods.component("k-options-dropdown", OptionsDropdown);
VueGlobalMethods.component("k-pagination", Pagination);
VueGlobalMethods.component("k-prev-next", PrevNext);
VueGlobalMethods.component("k-search", Search);
VueGlobalMethods.component("k-tag", Tag);
VueGlobalMethods.component("k-topbar", Topbar);

/* Sections */
import "@/components/Sections/index.js";

/* Views */
import AccountView from "@/components/Views/AccountView.vue";
import ErrorView from "@/components/Views/ErrorView.vue";
import FileView from "@/components/Views/FileView.vue";
import InstallationView from "@/components/Views/InstallationView.vue";
import LanguagesView from "@/components/Views/LanguagesView.vue";
import LoginView from "@/components/Views/LoginView.vue";
import PageView from "@/components/Views/PageView.vue";
import PluginView from "@/components/Views/PluginView.vue";
import ResetPasswordView from "@/components/Views/ResetPasswordView.vue";
import SiteView from "@/components/Views/SiteView.vue";
import SystemView from "@/components/Views/SystemView.vue";
import UsersView from "@/components/Views/UsersView.vue";
import UserView from "@/components/Views/UserView.vue";

VueGlobalMethods.component("k-account-view", AccountView);
VueGlobalMethods.component("k-error-view", ErrorView);
VueGlobalMethods.component("k-file-view", FileView);
VueGlobalMethods.component("k-installation-view", InstallationView);
VueGlobalMethods.component("k-languages-view", LanguagesView);
VueGlobalMethods.component("k-login-view", LoginView);
VueGlobalMethods.component("k-page-view", PageView);
VueGlobalMethods.component("k-plugin-view", PluginView);
VueGlobalMethods.component("k-reset-password-view", ResetPasswordView);
VueGlobalMethods.component("k-site-view", SiteView);
VueGlobalMethods.component("k-system-view", SystemView);
VueGlobalMethods.component("k-users-view", UsersView);
VueGlobalMethods.component("k-user-view", UserView);

/* Blocks */
import "@/components/Forms/Blocks/index.js";

/* Field Previews */
import "@/components/Forms/Previews/index.js";
