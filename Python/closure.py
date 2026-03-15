def chiaurcode(num):
    def actual(x):
        return x ** num
    return actual

f = chiaurcode(2)
g = chiaurcode(3)

print(f(3))
print(g(3))