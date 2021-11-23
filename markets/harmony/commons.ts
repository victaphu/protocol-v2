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
    AAVE: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
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
    [eHarmonyNetwork.harmonyTest]: '0xCD3B71205D34d9c15B00aA0B12c2667a70D4679d',
  },
  ProviderRegistryOwner: {
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: '0x210C1507CC98638Cd99dE7b42EC674bad8C3Ca59',
  },
  LendingRateOracle: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '0x299351B26F2438f45330f0Fa2cB830932FB53426',
  },
  LendingPoolCollateralManager: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '',
  },
  LendingPoolConfigurator: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '0x590a6c1Ef6f42710DCE5ED1015A5F30301F15732',
  },
  LendingPool: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '0x00773337d57aAe9474bCC9A2D48294a8677E2a16',
  },
  WethGateway: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '0x044B2AA7FeC95a373DD8202CceD89B59c16Bf4F5',
  },
  TokenDistributor: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '',
  },
  AaveOracle: {
    [eHarmonyNetwork.harmony]: '',
    [eHarmonyNetwork.harmonyTest]: '',
  },
  FallbackOracle: {
    [eHarmonyNetwork.harmony]: ZERO_ADDRESS,
    [eHarmonyNetwork.harmonyTest]: ZERO_ADDRESS,
  },
  ChainlinkAggregator: {
    // https://github.com/VenomProtocol/venomswap-default-token-list/blob/main/src/tokens/harmony-mainnet.json
    [eHarmonyNetwork.harmony]: { // not yet deployed on main-net
      WETH: '0x6983D1E6DEf3690C4d616b13597A09e6193EA013',
      DAI: '0xEf977d2f931C1978Db5F6747666fa1eACB0d0339',
      USDC: '0x985458E523dB3d53125813eD68c274899e9DfAb4',
      USDT: '0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
      AAVE: '0xcF323Aad9E522B93F11c352CaA519Ad0E14eB40F',
      WBTC: '0x3095c7557bCb296ccc6e363DE01b760bA031F2d9',
      WONE: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
    },
    // https://github.com/VenomProtocol/venomswap-default-token-list/blob/main/src/tokens/harmony-testnet.json
    [eHarmonyNetwork.harmonyTest]: { // https://docs.chain.link/docs/harmony-price-feeds/
      WETH: '0x1E120B3b4aF96e7F394ECAF84375b1C661830013',
      USDT: '0x7eb799851b98d26d9d37acfe4cea7aa5fe2a81f0',
      WBTC: '0x6c4387C4f570Aa8cAdcaFFc5E73ecb3D0F8Fc593',
      WONE: '0x7466d7d0C21Fa05F32F5a0Fa27e12bdC06348Ce2',
      USDC: '0xc285b03ffdb3fb5c77e3bdd0a2206a69a3691f0e',
      AAVE: '0x5490eb132e3bbeb468ed4019b67aadb1fe437671',
      DAI: "0xc27255d7805fc79e4616d5cd50d6f4464aea75a3"
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
    [eHarmonyNetwork.harmonyTest]: '',
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
    [eHarmonyNetwork.harmonyTest]: '0x7c62593Ee4e6F27aC2d343f46484Fa7C8C27aBf9',
  },
};
