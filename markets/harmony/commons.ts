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
    [eHarmonyNetwork.harmonyTest]: undefined,
  },
  ProviderRegistryOwner: {
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: undefined,
  },
  LendingRateOracle: {
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: undefined,
  },
  LendingPoolCollateralManager: {
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: undefined,
  },
  LendingPoolConfigurator: {
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: undefined,
  },
  LendingPool: {
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: undefined,
  },
  WethGateway: {
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: undefined,
  },
  TokenDistributor: {
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: undefined,
  },
  AaveOracle: {
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: undefined,
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
      USD: '0xc285b03ffdb3fb5c77e3bdd0a2206a69a3691f0e',
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
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: undefined, // Self-controlled EOA for testing
  },
  IncentivesController: {
    [eHarmonyNetwork.harmony]: undefined,
    [eHarmonyNetwork.harmonyTest]: undefined,
  },
};
