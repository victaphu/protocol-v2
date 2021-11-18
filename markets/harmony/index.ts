import { eAvalancheNetwork, eHarmonyNetwork, IHarmonyConfiguration } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyWETH,
  strategyDAI,
  strategyUSDC,
  strategyUSDT,
  strategyAAVE,
  strategyWBTC,
  strategyWONE,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const HarmonyConfig: IHarmonyConfiguration = {
  ...CommonsConfig,
  MarketId: 'Harmony market',
  ProviderId: 4,
  ReservesConfig: {
    WETH: strategyWETH,
    DAI: strategyDAI,
    USDT: strategyUSDT,
    USDC: strategyUSDC,
    AAVE: strategyAAVE,
    WBTC: strategyWBTC,
    WONE: strategyWONE,
  },
  ReserveAssets: {
    [eHarmonyNetwork.harmony]: {
      WETH: '0x6983D1E6DEf3690C4d616b13597A09e6193EA013',
      DAI: '0xEf977d2f931C1978Db5F6747666fa1eACB0d0339',
      USDC: '0x985458E523dB3d53125813eD68c274899e9DfAb4',
      USDT: '0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
      AAVE: '0xcF323Aad9E522B93F11c352CaA519Ad0E14eB40F',
      WBTC: '0x3095c7557bCb296ccc6e363DE01b760bA031F2d9',
      WONE: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
    },
    [eHarmonyNetwork.harmonyTest]: {
      WETH: '0x1E120B3b4aF96e7F394ECAF84375b1C661830013',
      USDT: '0x7eb799851b98d26d9d37acfe4cea7aa5fe2a81f0',
      WBTC: '0x6c4387C4f570Aa8cAdcaFFc5E73ecb3D0F8Fc593',
      WONE: '0x7466d7d0C21Fa05F32F5a0Fa27e12bdC06348Ce2',
      USD: '0xc285b03ffdb3fb5c77e3bdd0a2206a69a3691f0e',
      AAVE: '0x5490eb132e3bbeb468ed4019b67aadb1fe437671'
    },
  },
};

export default HarmonyConfig;
