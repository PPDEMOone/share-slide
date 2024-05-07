## RPC的一些常见特性

<style>
  *::-webkit-scrollbar {
    display: none;
  }
</style>

<div class=" overflow-scroll max-h-[500px] pb-16">
<v-clicks>

- 跨平台跨编程语言

```rs
    // node client
    const res = Service.callFunc(...args);
    console.log(res) // output: [1, 2, 3]


    // rust server
    impl RPCService for Service {
      fn call_func(...args) --> Option<Vec<i32>> {
        Option::Some(vec![1,2,3])
      }
    }

```

- 高性能、传输效率高

```
  为大部分RPC协议、框架的特性、该特性一般多体现在后端服务之间的通信、多采用二进制序列化传输
```

- 网络协议和网络 IO 模型对其透明

```
  RPC 的客户端认为自己是在调用本地对象，因此其对使用的网络协议（ HTTP 协议等）以及网络 IO 模型，是不关心的。
```

</v-clicks>

  </div>
