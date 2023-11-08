import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.web.agentesecreto',
  appName: 'Agente Secreto',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
