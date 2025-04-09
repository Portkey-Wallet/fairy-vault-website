import { NetworkType } from 'types/network';

export interface VerifyEntryParams {
  currentGuardians: UserGuardianItem;
  originChainId: ChainId;
  targetChainId: ChainId;
  serviceUrl: string;
  operationType: OperationTypeEnum;
  operationDetails: string;
  onlineType: TCustomNetworkType;
  symbol?: string;
  amount?: string;
  clientId?: string;
  networkType?: NetworkType;
}

export type ChainId = 'AELF' | 'tDVV' | 'tDVW';

export type ISocialLogin = 'Google' | 'Apple' | 'Telegram';

export type TCustomNetworkType = 'offline' | 'onLine';

export interface IVerificationInfo {
  signature?: string;
  verificationDoc?: string;
  verifierId?: string;
}
export interface IVerifierInfo {
  sessionId: string;
}

export interface UserGuardianItem extends BaseGuardianItem {
  verifierInfo?: IVerifierInfo;
  isInitStatus?: boolean;
}
export interface BaseGuardianItem {
  isLoginGuardian: boolean | undefined;
  verifier?: VerifierItem;
  identifier?: string;
  guardianIdentifier?: string;
  guardianType: AccountType;
  key: string; // `${identifier}&${verifier?.id}`,
  identifierHash?: string;
  salt?: string;
  thirdPartyEmail?: string;
  isPrivate?: boolean;
  firstName?: string;
  lastName?: string;
  accessToken?: string;
}

export interface VerifierItem {
  id: string;
  name: string;
  imageUrl: string;
  endPoints?: string[];
  verifierAddresses?: string[];
}

export declare enum AccountTypeEnum {
  Email = 0,
  Phone = 1,
  Google = 2,
  Apple = 3,
  Telegram = 4,
}
export declare const AccountTypeKeyEnum: {
  Email: string;
  Phone: string;
  Google: string;
  Apple: string;
  Telegram: string;
};
export type AccountType = keyof typeof AccountTypeEnum;

export enum OperationTypeEnum {
  unknown = 0,
  register = 1,
  communityRecovery = 2,
  addGuardian = 3,
  deleteGuardian = 4,
  editGuardian = 5,
  removeOtherManager = 6,
  setLoginAccount = 7,
  managerApprove = 8,
  modifyTransferLimit = 9,
  transferApprove = 10,
  unsetLoginAccount = 11,
}

export const translateOperationEnumToStr = (enumPtr: OperationTypeEnum) => {
  switch (enumPtr) {
    case OperationTypeEnum.register: {
      return 'Create AA Address';
    }
    case OperationTypeEnum.communityRecovery: {
      return 'Social Recovery';
    }

    case OperationTypeEnum.addGuardian: {
      return 'Add Guardian';
    }
    case OperationTypeEnum.deleteGuardian: {
      return 'Remove Guardian';
    }
    case OperationTypeEnum.editGuardian: {
      return 'Update Guardian';
    }
    case OperationTypeEnum.removeOtherManager: {
      return 'Remove Device';
    }
    case OperationTypeEnum.setLoginAccount: {
      return 'Set Login Account';
    }
    case OperationTypeEnum.managerApprove: {
      return 'Approve';
    }
    case OperationTypeEnum.modifyTransferLimit: {
      return 'Set Transfer Limit';
    }
    case OperationTypeEnum.transferApprove: {
      return 'Guardian Approve Transfer';
    }
    case OperationTypeEnum.unsetLoginAccount: {
      return 'Unset Login Account';
    }

    default:
    case OperationTypeEnum.unknown: {
      return 'Unknown';
    }
  }
};

export const getCountry = async (serviceUrl: string) => {
  const data = await fetch(`${serviceUrl}/api/app/ipInfo/ipInfo`);
  return (await data.json()).country;
};
