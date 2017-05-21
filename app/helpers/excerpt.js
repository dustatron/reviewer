import Ember from 'ember';

export function excerpt(params/*, hash*/) {
  return params[0].substring(0,15);
}

export default Ember.Helper.helper(excerpt);
