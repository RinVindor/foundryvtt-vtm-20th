/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
import { systemHandle, systemName } from "./utils.js";

export class VampireActor extends Actor {

  selectAttribute(value) {
    return super.setFlag(systemName, "selectedAttribute", value);
  }
  unselectAttributes() {
    return this.selectAttribute(null);
  }

  getSelectedAttribute() {
    return super.getFlag(systemName, "selectedAttribute");
  }

  getAttribute(label) {
    let attr = null;
    const { attributes } = super.getRollData();
    for (let [groupKey, group] of Object.entries(attributes)) {
      for (let [key, attribute] of Object.entries(group)) {
        if (game.i18n.localize(attribute.label) === label) {
          attr = attribute;
          attr.attribute_type = groupKey;
          attr.attribute_key = key;
        }
      }
    }
    return attr;
  }

  getAbility(label) {
    let ab = null;
    const { abilities } = super.getRollData();
    for (let [groupKey, group] of Object.entries(abilities)) {
      for (let [key, ability] of Object.entries(group)) {
        if (game.i18n.localize(ability.label) === label) {
          ab = ability;
          ab.ability_type = groupKey;
          ab.ability_key = key;
        }
      }
    }
    return ab; 
  }
}
