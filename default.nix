with (import <nixpkgs> {});
#with (import /home/maarten/code/nixos/yarn2nix { inherit pkgs; });
rec {
  weave-front-end = mkYarnPackage {
    name = "safesupport-chatbox";
    src = ./.;
    packageJSON = ./package.json;
    yarnLock = ./yarn.lock;
    # NOTE: this is optional and generated dynamically if omitted
    yarnNix = ./yarn.nix;
  };
}
