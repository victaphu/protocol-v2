import BigNumber from 'bignumber.js';
import {
  oneEther,
  oneRay,
  RAY,
  ZERO_ADDRESS,
  MOCK_CHAINLINK_AGGREGATORS_PRICES,
  oneUsd,
} from '../../helpers/constants';
import { ICommonConfiguration, eHarmonyNetwork } from '../../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: 'Commons',
  ATokenNamePrefix: 'Aave Harmony Market',
  StableDebtTokenNamePrefix: 'Aave Harmony Market stable debt',
  VariableDebtTokenNamePrefix: 'Aave Harmony Market variable debt',
  SymbolPrefix: 'v',
  ProviderId: 0, // Overriden in index.ts
  OracleQuoteCurrency: 'USD',
  OracleQuoteUnit: oneUsd.toString(),
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0xc285b03ffdb3fb5c77e3bdd0a2206a69a3691f0e', // TODO: what is this?
    NilAddress: '0x0000000000000000000000000000000000000000',
    OneAddress: '0x0000000000000000000000000000000000000001',
    AaveReferral: '0',
  },

  // ----------------
  // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
  // ----------------

  Mocks: {
    AllAssetsInitialPrices: {
      ...MOCK_CHAINLINK_AGGREGATORS_PRICES,
    },
  },
  // TODO: reorg alphabetically, checking the reason of tests failing
  LendingRateOracleRatesCommon: {
    WETH: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    DAI: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDC: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDT: {
      borrowRate: oneRay.multipliedBy(0.035).toFixed(),
    },
    // AAVE: {
    //   borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    // },
    WBTC: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    WONE: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(), // TODO: fix borrowRate?
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: undefined,
  },
  PoolAdminIndex: 0,
  EmergencyAdminIndex: 0,
  EmergencyAdmin: {
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: undefined,
  },
  ProviderRegistry: {
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: undefined, //'0xCD3B71205D34d9c15B00aA0B12c2667a70D4679d',
  },
  ProviderRegistryOwner: {
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: "0x210C1507CC98638Cd99dE7b42EC674bad8C3Ca59", //'0x210C1507CC98638Cd99dE7b42EC674bad8C3Ca59',
  },
  LendingRateOracle: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '0x627208AC1642457E92bA78b08621b1C9E4447671'//'0x299351B26F2438f45330f0Fa2cB830932FB53426',
  },
  LendingPoolCollateralManager: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '0x0B79038A5ab8d63f822F67dec9c5b3d07239a870'//'0xc482773c0A9F2D4e935c50e861427aC6790152Ab',
  },
  LendingPoolConfigurator: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '0xCCFD29682C4E777A0B64E33d106f29156EF05BB7'//'0x590a6c1Ef6f42710DCE5ED1015A5F30301F15732',
  },
  LendingPool: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '0x05f92877E2761aFCE684b901B98f88b3aE6d2293'//'0x00773337d57aAe9474bCC9A2D48294a8677E2a16',
  },
  WethGateway: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '0x105EF3580D3Ea60841F81185BBA6501c59fe82cF'//'0x044B2AA7FeC95a373DD8202CceD89B59c16Bf4F5',
  },
  TokenDistributor: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '',
  },
  AaveOracle: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '0x1368F83468AAbE93265FBe4231d4572da5911AF6'//'0x7b2dd1c9991C09EC92619659beFeb8D2F784530E',
  },
  FallbackOracle: {
    [eHarmonyNetwork.harmony]: ZERO_ADDRESS,
    [eHarmonyNetwork.harmonyTest]: ZERO_ADDRESS,
  },
  ChainlinkAggregator: {
    // https://github.com/VenomProtocol/venomswap-default-token-list/blob/main/src/tokens/harmony-mainnet.json
    [eHarmonyNetwork.harmony]: { // not yet deployed on main-net
      WETH: '',
      DAI: '',
      USDC: '',
      USDT: '',
      AAVE: '',
      WBTC: '',
      WONE: '',
    },
    // https://github.com/VenomProtocol/venomswap-default-token-list/blob/main/src/tokens/harmony-testnet.json
    [eHarmonyNetwork.harmonyTest]: { // https://docs.chain.link/docs/harmony-price-feeds/
      WETH: '0x4f11696cE92D78165E1F8A9a4192444087a45b64',
      USDT: '0x9A37E1abFC430B9f5E204CA9294809c1AF37F697',
      WBTC: '0xEF637736B220a58C661bfF4b71e03ca898DCC0Bd',
      WONE: '0xcEe686F89bc0dABAd95AEAAC980aE1d97A075FAD',
      USDC: '0x6F2bD4158F771E120d3692C45Eb482C16f067dec',
    },
  },
  ReserveAssets: {
    [eHarmonyNetwork.harmony]: {},
    [eHarmonyNetwork.harmonyTest]: {},
  },
  ReservesConfig: {},
  ATokenDomainSeparator: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '',
  },
  WETH: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '0x1E120B3b4aF96e7F394ECAF84375b1C661830013',
  },
  WrappedNativeToken: {
    [eHarmonyNetwork.harmony]: '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a', // Official WONE
    [eHarmonyNetwork.harmonyTest]: '0x7466d7d0c21fa05f32f5a0fa27e12bdc06348ce2', // Official WONE
  },
  ReserveFactorTreasuryAddress: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '0x210C1507CC98638Cd99dE7b42EC674bad8C3Ca59', // Self-controlled EOA for testing
  },
  IncentivesController: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '0x0a51F37d86698cC5E39D8F823307992A5154bCF0',
  },
};
