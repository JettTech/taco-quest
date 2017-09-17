import random
import json

mockfile= "4squareoutput.json"

file= open(mockfile, "r")
input= json.loads(file.read())
# print json.loads(file.read())
read_items= input["response"]["venues"]
output_items = {}
final_scores= "scores.json"

for i in range(0,len(read_items)-1):
    neutral = random.randint(0,5)
    sad = random.randint(0, 5)
    happy = 10-sad-neutral

    id = read_items[i]["id"]
    output_items[id] = {
        "happy": happy,
        "neutral": neutral,
        "sad": sad,
    }

ls_output= {"location-scores": output_items}

f = open(final_scores, "w")
f.write(json.dumps(ls_output))

f.close()
