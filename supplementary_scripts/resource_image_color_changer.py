from PIL import Image
from pathlib import Path
from matplotlib.pyplot import imshow
from matplotlib import pyplot as plt
import numpy as np

# change this
path = Path("/Users/User/Desktop/splash_class/web_interface/resources")

colors = [
    [215,182,114],
    [176,243,203],
    [51,165,56],
    [255,255,0],
    [1,7,144],
    [80,240,99],
    [248,249,190],
    [255,30,0],
    [196,0,92],
    [199,92,40],
    [255,174,0],
    [94,222,249],
    [180,180,180],
    [255,255,255],
    [229,187,190],
    [221,221,221]
]
def recolor_image(im, r, g, b):
    ar = np.asarray(i).copy()
    ar[:,:,0] = r
    ar[:,:,1] = g
    ar[:,:,2] = b
    return Image.fromarray(ar)

for f in path.iterdir():
    if str(f)[-10:] == "_inner.png":
        i = Image.open(str(f))
        for r, g, b in colors:
            new_path = str(f)[:-10] + "_{}_{}_{}.png".format(r,g,b)
            i2 = recolor_image(i, r, g, b)
            i2.save(new_path)
            print(new_path)
