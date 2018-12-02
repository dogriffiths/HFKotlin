---
title: The year ahead for Kotlin
subtitle: Looking into the future
author: Head First Labs
image: images/53174.jpg
date: "2018-12-01 13:06"
tags:
  - Predictions
  - 2019

---

2019 will be the year of Kotlin 1.3. For developers who have been tentatively looking at Kotlin, the introduction of 1.3 means it's the perfect time to jump in with both feet. 

What are the key features of 1.3? 

Co-routines are no longer experimental. They are like lightweight threads which allow code to scale-out efficiently. Scaling always used to be a usability problem; the worse your app was at scaling, the worse the experience was for the users. The cloud has changed all that. Now scalability is a financial problem. The better your app is at scaling, the lower your running costs. 

2018 saw much activity in making traditional enterprise Java frameworks--like Spring Boot--more Kotlin-friendly However, newer frameworks like [Ktor](https://github.com/ktorio/ktor) are breathing new life into the server-side. Kotlin co-routines are at the heart of Ktor, alongside an application model that is similar to the Node.js Express library. 

2019 is also the year when Kotlin is likely to see significant use beyond the Java world. Multi-platform builds allow you to compile the same code for the JVM, for JavaScript and (using the beta version of Kotlin/Native) for iOS, Linux, Mac, Windows, and WebAssembly. While possible, it's unlikely that many people will choose to build client-side apps entirely in Kotlin. JavaScript would appear to have an increasingly indomitable position in the browser. However, Kotlin is proving itself to be an excellent language for library-builders. The same code can build a library for Java, JavaScript, C, and Swift. 

If you are, for example, a bank  that performs some complex financial calculation on the server. Kotlin allows you to convert that server-code into a Kotlin library which can run on both the server (where processing cycles are expensive) and on the client (where processing cycles are free). Multi-platform builds can improve the experience for your users, and also take some of the load off your server.

Finally, looking beyond Kotlin 1.3, 2019 is also the year when the language is likely to acquire features to catch bugs at compile time. Keep a lookout for features that reduce/eliminate shared mutable state in concurrent code, and also for first-class immutability support in the language. 

Architects and tech leads should start to pay very serious attention to Kotlin in the year ahead.