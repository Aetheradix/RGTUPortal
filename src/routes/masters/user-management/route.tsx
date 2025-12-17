import { Route } from 'react-router-dom';
import { createUserLevelRoute } from './create-user-level/route';
import { moduleMappingRoute } from './module-mapping/route';
import { parentMenuCreationRoute } from './parent-menu-creation/route';
import { subMenuCreationRoute } from './sub-menu-creation/route';
import { roleCreationRoute } from './role-creation/route';
import { roleWiseModuleMappingRoute } from './role-wise-module-mapping/route';
import { inchargeMappingRoute } from './incharge-mapping/route';
import { formWiseRightsAssignRoute } from './form-wise-rights-assign/route';
import { roleWiseRightsAssignRoute } from './role-wise-rights-assign/route';

export const userManagementRoutes = (
  <>
    {createUserLevelRoute}
    {moduleMappingRoute}
    {parentMenuCreationRoute}
    {subMenuCreationRoute}
    {roleCreationRoute}
    {roleWiseModuleMappingRoute}
    {inchargeMappingRoute}
    {formWiseRightsAssignRoute}
    {roleWiseRightsAssignRoute}
  </>
);
