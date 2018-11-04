package com.example.steps;

import java.util.HashMap;
import java.util.Map;

public class AliasStore {
    private static AliasStore instance = new AliasStore();

    private AliasStore() {
        // Do nothing
    }

    /**
     * Gets instance.
     *
     * @return the instance
     */
    public static AliasStore getInstance() {
        return instance;
    }

    private Map<String, Object> aliasStore = new HashMap<>();

    /**
     * Get t.
     *
     * @param <T>   the type parameter
     * @param alias the alias
     * @param type  the type
     * @return the t
     */
    public <T> T get(final String alias, Class<T> type) {
        return type.cast(aliasStore.get(alias));
    }

    /**
     * Put.
     *
     * @param alias the alias
     * @param me    the me
     */
    public void put(final String alias, Object me) {
        aliasStore.put(alias, me);
    }

    /**
     * Clear.
     */
    public void clear() {
        aliasStore.clear();
    }
}