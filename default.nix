with (import <nixpkgs> {});
mkYarnPackage {
  name = "safesupport-chatbox";
  src = ./.;
  packageJSON = ./package.json;
  yarnLock = ./yarn.lock;
  # NOTE: this is optional and generated dynamically if omitted
  yarnNix = ./yarn.nix;
}
