#Two families
#The below program exemplifies the capabilities of two special methods, __getitem__ and __len__ as well as a container datatypes - collections.
#As docs.python.org states about collections: "This module implements specialized container datatypes providing alternatives to Python's general purpose built-in containers, dict, list, set, and tuple."
import collections

Person = collections.namedtuple('Member',['name', 'rank'])
#collections.namedtuple('typename', 'field_names', *, rename=False, defaults=None, module=None) - returns a new subclass of tuple with named fields

class Family:
    ranks = [str(n) for n in range(2, 11)] + 'father mother brother sister'.split()
    names = 'Olga Ola Cyna Tosia'.split()
    #str.split(sep=None, maxsplit=-1) - returns a list of the substrings in the string, using sep as the separator string.
    

print("all done")
