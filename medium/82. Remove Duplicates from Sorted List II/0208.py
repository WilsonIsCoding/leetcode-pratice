# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        fast = head
        dummy = ListNode(0, head)
        slow = dummy
        while fast:
            if fast.next and fast.val==fast.next.val:
                while fast.next and fast.val==fast.next.val:
                    fast=fast.next
                slow.next=fast.next
            else:
                slow=slow.next
            fast=fast.next
        return dummy.next