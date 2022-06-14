// Vendor
import React, { useMemo, useCallback, useEffect } from 'react';
import createPersistedReducer from 'use-persisted-reducer';
// Internal

import AppContext, { initialState } from './Context';
import mainReducer from './reducers';

const usePersistedReducer = createPersistedReducer('state');

export function AppProvider({ children }) {
  const [state, dispatch] = usePersistedReducer(mainReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
