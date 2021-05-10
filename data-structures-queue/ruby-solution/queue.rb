require 'pry'


class Node 
    attr_accessor :value, :next
    
    def initialize(value)
        self.value = value
        self.next = nil
    end
end

class Queue
    attr_accessor :first, :last, :size

    def initialize
        self.size = 0
    end

    def push(value)
        node = Node.new(value)
        if self.first == nil
            self.first = node
            self.last = node
        else 
            self.last.next = node
            self.last = node
        end
        self.size += 1
        node
    end

    def unshift
        if self.first == nil
        elsif self.first.next == nil
            self.first = nil
            self.last = nil
        else
            self.first.value = nil
            self.first = self.first.next
        end
        self.size -=1
        self.first
    end

    def list_values
        result = []
        current = self.first
        while current
            result << current.value
            current = current.next
        end
        result
    end
    


end

queue = Queue.new
10.times {|index| queue.push(index)}

p queue.list_values


