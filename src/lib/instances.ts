import { Instance } from "./interfaces/instance";

export const fetchInstances = async () => {
  const instanceManifestUrl =
    process.env.NEXT_PUBLIC_INSTANCE_MANIFEST_URL ||
    "https://raw.githubusercontent.com/httpjamesm/AnonymousOverflow/main/instances.json";

  const res = await fetch(instanceManifestUrl);

  const data: Instance[] = await res.json();

  return data;
};
