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
    
        if @length === 0
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

    
 end

 list = SinglyLinkedList.new
 list.push(1)
 list.push(2)
 list.push(3)

binding.pry