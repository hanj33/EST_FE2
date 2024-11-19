abstract class Spell {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  abstract cast(): void;
}

// 불 마법이랑 얼음 마법의 이름을 열거형으로 정의
enum FireSpellName {
  FireBall = "Fire Ball",
  MeteorStrike = "Meteor Strike",
}
enum FrostSpellName {
  IceSpear = "Ice Spear",
  FrostNova = "Frost Nova",
}

class FireSpell extends Spell {
  readonly damage = 50;

  constructor(name: FireSpellName) {
    super(name);
  }

  cast() {
    console.log(
      `${this.name} 마법 발사! 상대의 피를 ${this.damage}만큼 깎았다!`
    );
  }
}

class FrostSpell extends Spell {
  readonly slow = 0.5;

  constructor(name: FrostSpellName) {
    super(name);
  }

  cast() {
    console.log(
      `${this.name} 마법 발사! 상대의 속도가 ${this.slow}만큼 느려졌다!`
    );
  }
}

class Wizard<S extends Spell> {
  #spellBook: S[] = [];

  constructor(spellBook: S[]) {
    this.#spellBook = spellBook;
  }

  // 마법의 이름을 통해서 마법을 찾아 발사합니다.
  castFromSpellBook(name: string) {
    // 마법의 이름으로 책안의 마법을 검색해서 있으면 실행, 없으면 에러
    const spell = this.#spellBook.find((spell) => name === spell.name);

    if (spell) {
      spell.cast();
    } else {
      throw new Error("배우지 않은 마법입니다");
    }
  }
}

const frostSpells: FrostSpell[] = [new FrostSpell(FrostSpellName.IceSpear)];
const fireSpells: FireSpell[] = [new FireSpell(FireSpellName.MeteorStrike)];

const frostWizard = new Wizard(frostSpells);
const fireWizard = new Wizard(fireSpells);

frostWizard.castFromSpellBook("Ice Spear");
fireWizard.castFromSpellBook("Meteor Strike");
