# What?

Another merge library, but I had a need to support merging objects who also had array properties (where as lodash's merge doesn't merge arrays, only objects).

Features:

- Deep merge
- Object merging
- Array merge
- Priority from right to left

# Install

```
npm install --save @remy/merge
```

# Usage

```
const result = merge(a, b);
```

Both `a` and `b` are untouched (i.e. this method doesn't mutate).

If a the same key appears as a primitive in `a` and `b`, then the value from `b` is in the result.

If the same key appears as an array or as an object, the result is the merged result.
