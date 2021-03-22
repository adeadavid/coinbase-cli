# Cryptocurrency command line interface status application (cryptostats-v2)

command line interface for cyptocurrencies

## Version

1.0.2

## Useage

### System Requirements

[Node Js](https://nodejs.org/en/, "Download Node Js")

### Installation

Install package globally, prexif with sudo if permissions are not set properly on macOS

```bash
    npm -g cryptostats-v2
```

### Commands

Get help

```bash
    cryptostats-v2 --help
```

Set API key from [Nomics](https://nomics.com/)

```bash
    cryptostats-v2 key set
```

Get API Key

```bash
    cryptostats-v2 key get
```

Remove API Key

```bash
    cryptostats-v2 key remove
```

Check cryptocurrency price <br>
options

- --base : CSV values of the currency symbols defaults to BTC,ETH,XRP
- --quote : currency symbol, defaults to USD

```bash
    cryptostats-v2 check price
```

Check DOGE against Naira

```bash
    cryptostats-v2 check price --base DOGE --NGN
```

## App Info

### Author

Adegorite Afolabi David [twitter](https://twitter.com/story_of_afro)

### License

This project is licensed under the MIT License
