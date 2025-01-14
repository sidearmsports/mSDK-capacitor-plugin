import { WebPlugin } from "@capacitor/core";
import { PaciolanSdkPlugin } from "./definitions";

export class PaciolanSdkPluginWeb extends WebPlugin
  implements PaciolanSdkPlugin {
  constructor() {
    super({
      name: "PaciolanSdk",
      platforms: ["web"]
    });
  }

  async show(options: { config: string }): Promise<{ config: string }> {
    return options;
  }
}
