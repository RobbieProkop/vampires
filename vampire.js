class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let currentVampire = this;
    if (
      currentVampire.numberOfVampiresFromOriginal <
      vampire.numberOfVampiresFromOriginal
    ) {
      return true;
    } else {
      return false;
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.

  ancestors = function () {
    let ancestors = [];
    ancestors.push(this);
    if (this.creator) {
      ancestors = ancestors.concat(this.creator.ancestors());
    }
    return ancestors;
  };

  closestCommonAncestor(vampire) {
    let currentVampire = this;
    let current = currentVampire.ancestors();
    let vamp = vampire.ancestors();
    let common = current.filter((v) => {
      if (vamp.indexOf(v) > -1) return v;
    });
    return common[0];
  }

  decendents = function () {
    let decendents = [];
    decendents.push(this);
    if (this.offspring) {
      decendents = decendents.concat(this.offspring.decendants());
    }
  };
  get totalDecendents() {
    let total = 1;
    for (const decendents of this) {
    }
  }

  findByName() {}

  findByYear() {
    // return vampires born after 1980
  }
}

module.exports = Vampire;
