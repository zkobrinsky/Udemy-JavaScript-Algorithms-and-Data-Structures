require 'pry'

class Node
    attr_accessor :val, :next
   def initialize(val)
       @val = val  
       @next = nil
   end
end

class SinglyLinkedList
    attr_accessor :head, :tail, :length
    def initialize
        @head = nil
        @tail = nil
        @length = 0
    end

    def push(val)
        new_node = Node.new(val)
        if !@head 
            @head = new_node
            @tail = new_node
        else 
            @tail.next = new_node
            @tail = new_node
        end
        @length += 1
        return self 
    end

    def pop
        if !@head 
            return nil
        end
        current = @head
        newTail = current
    
        while current.next
          newTail = current
          current = current.next
        end
    
        @tail = newTail
        @tail.next = nil
        @length-=1
    
        if @length == 0
          @head = nil
          @tail = nil
        end
        return current
    end

    def shift 
        if !@head 
            return nil
        end
        returnVal = @head
        if @head.next 
          @head = @head.next
        else 
          @head = nil
          @tail = nil
        end
        @length-=1
        return returnVal
    end

    def unshift(val) 
        newNode = Node.new(val)
        if (!@head) 
          @head = newNode
          @tail = @head
        else 
          oldHead = @head
          newNode.next = oldHead
          @head = newNode
        end
    
        @length+=1
        return self
    end

    def getIndexOf(val) 
        current = @head
    
        for i in 0..@length
          if current.val == val
            return i
          end
          if current.next
            current = current.next
          end
        end
        return nil
    end

    def get(index)
        if index < 0 || index >= @length
            return nil
        end
        counter = 0
        current = @head
        while counter != index
          current = current.next
          counter+=1
        end
        return current
    end

    def set(value, index) 
        node = self.get(index) ? self.get(index) : false
        if node == false
            return node
        end
        node.val = value
        return true
    end

    def insert(val, index)
      if index < 0 || index > @length
        return false
      end
      if (index == 0)
        !!self.unshift(val)
      end
      if (index == @length)
        return !!self.push(val)
      end
  
      leftNode = self.get(index - 1)
      rightNode = self.get(index)
  
      newNode = Node.new(val)
      leftNode.next = newNode
      newNode.next = rightNode
      @length+=1
      return true
    end

    def remove(index)
      if index < 0 || index > @length
        return undefined
      end
      if index == @length - 1 
        return self.pop
      end
      if index == 0
        return self.shift
      end
  
      node = self.get(index)
      rightNode = node.next
      leftNode = self.get(index - 1)
      leftNode.next = rightNode
      node.val = nil
      @length-=1
      return node
    end

    def print
      arr = []
      current = self.head
      while (current) 
        arr.push(current.val)
        current = current.next
      end
      return arr
    end

    def reverse
      # swap
      node = @head
      @head = @tail
      @tail = node
  
      next_node = nil
      prev = nil
  
      for i in 0..@length-1
        next_node = node.next
        node.next = prev
        prev = node
        node = next_node
      end
      return self
    end
 end

 list = SinglyLinkedList.new
 list.push(1)
 list.push(2)
 list.push(3)

binding.pry