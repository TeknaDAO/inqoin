import { DeployDao as DeployDaoEvent } from '../../../generated/membership-template.aragonpm.eth@2.0.0/DAOTemplate'
import { SetupDao as SetupDaoEvent } from '../../../generated/membership-template.aragonpm.eth@2.0.0/DAOTemplate'
import { DeployToken as DeployTokenEvent } from '../../../generated/membership-template.aragonpm.eth@2.0.0/DAOTemplate'
import { InstalledApp as InstalledAppEvent } from '../../../generated/membership-template.aragonpm.eth@2.0.0/DAOTemplate'
import * as aragon from '../aragon'

export function handleDeployDao(event: DeployDaoEvent): void {
  aragon.processOrg(event.params.dao)
}

export function handleInstalledApp(event: InstalledAppEvent): void {
  aragon.processApp(event.params.appProxy, event.params.appId.toHexString())
}

export function handleDeployToken(event: DeployTokenEvent): void {
  aragon.processToken(event.params.token)
}

export function handleSetupDao(event: SetupDaoEvent): void {}
