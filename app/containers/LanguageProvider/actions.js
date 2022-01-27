/*
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE } from './constants';

export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}

export function regUserData(userdata) {
  return {
    type: REGISTER_USER_DATA,
    registeruserData: userdata,
  };
}
