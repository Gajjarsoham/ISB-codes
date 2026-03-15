# 1.
# def square(n):
#     return n*n
# result = square(4)
# print(result)

# 2.
# def twoSum (a, b):
#     return a + b
# result = twoSum(10, 18)
# print(result)

# 3.
# def multiply(p1, p2):
#     return p1 * p2
# print(multiply(8, 5))
# print(multiply("a", 5))
# print(multiply(5, "a"))

# 4.
# def sum_all(*args):
#     return sum(args)

# print(sum_all(1, 2))
# print(sum_all(1, 2, 3, 4))

# 5.
# def kwargs(**kwargs):
#     for key, value in kwargs.items():
#         print(f"{key}: {value}")
    
# kwargs(name="shaktiman", power="lazer")
# kwargs(name="shaktiman")
# kwargs(name="shaktiman", power="lazer", enemy="shakal")

# 6. Generator function with yield
# def even_generator(limit):
#     for i in range(2, limit + 1, 2):
#         yield i

# for num in even_generator(10):
#     print(num)

# 7.recursive function for factorial number
# import math
# def fact(n):
#     if n == 0:
#         return 1
#     else:
#         return n * math.factorial(n - 1)
    
# print(fact(5))