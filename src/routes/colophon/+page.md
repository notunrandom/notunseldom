# Colophon

This site is made with:

- SvelteKit
- Nord Theme
- Mdsvex
- Prism.js (included with mdsvex)

To see/test prism.js syntax highlighting, examples in Haskell:

```haskell
-- First problem from ProjectEuler.net

euler1 = sum([x | x <- [1..999], x `mod` 3 == 0 || x `mod` 5 == 0])
```

... and Python:

```python
# Second problem from ProjectEuler.net

def euler2():
    s = 0
    x, y = 1, 2
    while y <= 4e6:
        if y % 2 == 0: s += y
        x, y = y, x + y
    print(s)
```
