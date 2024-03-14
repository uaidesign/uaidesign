#!/bin/bash

echo "Design Tokens Start"
cd design-tokens
pnpm build
cd ..
echo "OK"

echo "Enum #1 Start"
cd tokens-handler
cd src
cd css
cd enums
tsx index-1.ts
cd ..
cd ..
cd ..
cd ..
echo "OK"

echo "Types #1 Start"
cd types
pnpm build
cd ..
echo "OK"

echo "Enum #2 Start"
cd tokens-handler
cd src
cd css
cd enums
tsx index-2.ts
cd ..
cd ..
cd ..
cd ..
echo "OK"

echo "Types #2 Start"
cd types
pnpm build
cd ..
echo "OK"

echo "CSS Start"
cd tokens-handler
cd src
cd css
cd css-files
tsx index.ts
cd ..
cd ..
cd ..
cd ..
echo "OK"

echo "All OK!"