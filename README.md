# Decentralised-File-System

In our decentralized file system, we leverage popular technologies like IPFS (InterPlanetary File System), Pinata, React, and Solidity to create a robust and efficient platform for file storage and management. Here's a brief description of how these technologies play a role:

IPFS (InterPlanetary File System): IPFS is a distributed and peer-to-peer file system designed to create a permanent and decentralized method of storing and sharing files. It uses a content-addressable system, where files are referenced by their unique hashes, ensuring data integrity and easy retrieval.

Pinata: Pinata is a service built on top of IPFS that simplifies file pinning and management. File pinning is the act of ensuring that a specific file remains available on the IPFS network, even if the original uploader goes offline. Pinata helps improve data redundancy and ensures the availability of files.

React: React is a popular JavaScript library for building user interfaces. We can use React to create a user-friendly front-end for our decentralized file system, allowing users to interact with the platform easily.

Solidity: Solidity is a programming language used for writing smart contracts on the Ethereum blockchain. We can integrate Solidity to implement features like access control and user permissions within the decentralized file system.

Basic Features of our Decentralized File System:

Upload: Users can upload files to the decentralized file system through the user interface built with React. Once uploaded, the system breaks down the file into smaller chunks and distributes them across the IPFS network.

Share: Each file is assigned a unique content-addressed hash by IPFS. Users can easily share files by providing others with the hash, which acts as a secure and reliable reference to access the content.

Access Control: Smart contracts written in Solidity can be used to manage access control. For instance, a contract could specify who has permission to read, write, or delete a specific file. This allows users to control who can access their files.

Redundancy and Availability: By using Pinata to pin files, we ensure that files remain available even if the original uploader is offline. Pinning redundant copies across multiple nodes in the IPFS network enhances data availability and fault tolerance.

Data Integrity: IPFS's content-addressable system and cryptographic hashes guarantee the integrity of files. Any alteration to the content would change the file's hash, making it easily detectable.

By combining IPFS, Pinata, React, and Solidity, our decentralized file system provides users with a secure, efficient, and distributed way to store, share, and manage their data without relying on a central authority.

Last but not least we aim to extent it to files , videos and what not !





