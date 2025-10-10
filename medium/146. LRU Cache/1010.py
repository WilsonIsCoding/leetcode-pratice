class Node:
    def __init__(self,key=None,value=None) -> None:
        self.key=key
        self.value=value
        self.prev=None
        self.next=None
class LRUCache:

    def __init__(self, capacity: int):
        self.capacity=capacity
        self.map={}
        self.dummyNode= Node()
        self.dummyNode.prev=self.dummyNode
        self.dummyNode.next=self.dummyNode

    def get(self, key: int) -> int:
        node=self.map.get(key)
        if not node:
            return -1
        self.delete_node(node)
        self.move_to_top(node)
        return node.value

    def put(self, key: int, value: int) -> None:
        node=self.map.get(key)
        if node:
            node.value=value
            self.delete_node(node)
            self.move_to_top(node)
            return
        else:
            new_node=Node(key=key,value=value)
            self.map[key]=new_node
            self.move_to_top(new_node)
            if len(self.map)>self.capacity:
                lru = self.dummyNode.prev
                self.delete_node(lru)
                del self.map[lru.key]

            
    def delete_node(self,node):
        node.next.prev=node.prev
        node.prev.next=node.next
        
    def move_to_top(self,node):
        node.next=self.dummyNode.next
        node.prev=self.dummyNode
        self.dummyNode.next.prev=node
        self.dummyNode.next=node