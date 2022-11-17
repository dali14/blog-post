<x-app-layout>
    <x-slot name="header">
    </x-slot>
    <p>test</p>
    <p v-if="false">test2</p>
        <Postindex :posts='@json(Auth::user()->posts)' :user='@json(Auth::user())'/>
</x-app-layout>