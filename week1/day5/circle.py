import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide either radius or diameter.")

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * (self.radius ** 2)

    def __str__(self):
        return f"Circle(radius={self.radius:.2f}, diameter={self.diameter:.2f}, area={self.area:.2f})"

    def __add__(self, other):
        if isinstance(other, Circle):
            new_radius = self.radius + other.radius
            return Circle(radius=new_radius)
        return NotImplemented

    def __lt__(self, other):
        return self.radius < other.radius

    def __eq__(self, other):
        return self.radius == other.radius



c1 = Circle(radius=3)
c2 = Circle(diameter=10)

print(c1)  
print(c2)


c3 = c1 + c2
print("Cercle additionné:", c3)


print("c1 est plus petit que c2 ?", c1 < c2)  
print("c1 est égal à c2 ?", c1 == c2)         

circles = [c1, c2, c3]
sorted_circles = sorted(circles)
print("\nCercles triés par rayon :")
for c in sorted_circles:
    print(c)
